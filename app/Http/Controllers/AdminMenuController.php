<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Carbon\Carbon;

class AdminMenuController extends Controller
{
    public function index()
    {
        $items = DB::select('SELECT * FROM menu_items ORDER BY id DESC');
        return Inertia::render('Admin/Dashboard', [
            'items' => $items,
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/ItemForm', [
            'item' => null
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'required|numeric',
            'image' => 'nullable|image|max:2048', // 2MB max
            'category' => 'required|string|in:beef,chicken,vegetarian,mutton,sides',
        ]);

        $imagePath = null;
        if ($request->hasFile('image')) {
            $imagePath = '/storage/' . $request->file('image')->store('menu_images', 'public');
        }

        $now = Carbon::now();

        DB::insert(
            'INSERT INTO menu_items (name, description, price, image, category, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [
                $validated['name'],
                $validated['description'] ?? null,
                $validated['price'],
                $imagePath,
                $validated['category'],
                $now,
                $now
            ]
        );

        return redirect()->route('admin.dashboard')->with('success', 'Item created successfully.');
    }

    public function edit($id)
    {
        $item = DB::selectOne('SELECT * FROM menu_items WHERE id = ? LIMIT 1', [$id]);

        if (!$item) {
            abort(404);
        }

        return Inertia::render('Admin/ItemForm', [
            'item' => $item
        ]);
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'required|numeric',
            'image' => 'nullable|image|max:2048',
            'category' => 'required|string|in:beef,chicken,vegetarian,mutton,sides',
        ]);

        // Get existing item to preserve image if a new one isn't uploaded
        $existingItem = DB::selectOne('SELECT image FROM menu_items WHERE id = ? LIMIT 1', [$id]);
        $imagePath = $existingItem->image;

        if ($request->hasFile('image')) {
            // Delete old image if it exists
            if ($imagePath && str_starts_with($imagePath, '/storage/')) {
                Storage::disk('public')->delete(str_replace('/storage/', '', $imagePath));
            }
            $imagePath = '/storage/' . $request->file('image')->store('menu_images', 'public');
        }

        DB::update(
            'UPDATE menu_items SET name = ?, description = ?, price = ?, image = ?, category = ?, updated_at = ? WHERE id = ?',
            [
                $validated['name'],
                $validated['description'] ?? null,
                $validated['price'],
                $imagePath,
                $validated['category'],
                Carbon::now(),
                $id
            ]
        );

        return redirect()->route('admin.dashboard')->with('success', 'Item updated successfully.');
    }

    public function destroy($id)
    {
        $item = DB::selectOne('SELECT image FROM menu_items WHERE id = ? LIMIT 1', [$id]);
        
        if ($item && $item->image && str_starts_with($item->image, '/storage/')) {
            Storage::disk('public')->delete(str_replace('/storage/', '', $item->image));
        }

        DB::delete('DELETE FROM menu_items WHERE id = ?', [$id]);

        return redirect()->route('admin.dashboard')->with('success', 'Item deleted successfully.');
    }
}
