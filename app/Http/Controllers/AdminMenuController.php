<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Carbon\Carbon;

class AdminMenuController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $items = DB::select('SELECT * FROM menu_items ORDER BY id DESC');
        
        return Inertia::render('Admin/Dashboard', [
            'items' => $items,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/ItemForm', [
            'item' => null
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'required|numeric',
            'image' => 'nullable|image|max:2048', // Validate as image
            'category' => 'required|string|in:beef,chicken,vegetarian,mutton,sides',
        ]);

        $imagePath = null;
        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('menu_images', 'public');
            $imagePath = Storage::url($path);
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

    /**
     * Show the form for editing the specified resource.
     */
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

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'price' => 'required|numeric',
            'image' => 'nullable', // Can be a file or the existing string path
            'category' => 'required|string|in:beef,chicken,vegetarian,mutton,sides',
        ]);

        $item = DB::selectOne('SELECT image FROM menu_items WHERE id = ? LIMIT 1', [$id]);
        $imagePath = $item->image;

        if ($request->hasFile('image')) {
            // Delete old image if it exists
            if ($imagePath) {
                $oldPath = str_replace('/storage/', '', $imagePath);
                Storage::disk('public')->delete($oldPath);
            }
            
            $path = $request->file('image')->store('menu_images', 'public');
            $imagePath = Storage::url($path);
        }

        $now = Carbon::now();

        DB::update(
            'UPDATE menu_items SET name = ?, description = ?, price = ?, image = ?, category = ?, updated_at = ? WHERE id = ?',
            [
                $validated['name'],
                $validated['description'] ?? null,
                $validated['price'],
                $imagePath,
                $validated['category'],
                $now,
                $id
            ]
        );

        return redirect()->route('admin.dashboard')->with('success', 'Item updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $item = DB::selectOne('SELECT image FROM menu_items WHERE id = ? LIMIT 1', [$id]);
        
        if ($item && $item->image) {
            $oldPath = str_replace('/storage/', '', $item->image);
            Storage::disk('public')->delete($oldPath);
        }

        DB::delete('DELETE FROM menu_items WHERE id = ?', [$id]);

        return redirect()->route('admin.dashboard')->with('success', 'Item deleted successfully.');
    }
}
