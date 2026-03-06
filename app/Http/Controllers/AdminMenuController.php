<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\ProductRepository;
use Inertia\Inertia;

class AdminMenuController extends Controller
{
    protected $repository;

    public function __construct(ProductRepository $repository)
    {
        $this->repository = $repository;
    }

    public function index()
    {
        $items = $this->repository->getAllDesc();
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

        $this->repository->create([
            'name' => $validated['name'],
            'description' => $validated['description'] ?? null,
            'price' => $validated['price'],
            'image' => $imagePath,
            'category' => $validated['category']
        ]);

        return redirect()->route('admin.dashboard')->with('success', 'Item created successfully.');
    }

    public function edit($id)
    {
        $item = $this->repository->findById($id);

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
        $existingItem = $this->repository->findById($id);
        $imagePath = $existingItem->image;

        if ($request->hasFile('image')) {
            $imagePath = '/storage/' . $request->file('image')->store('menu_images', 'public');
        }

        $this->repository->update($id, [
            'name' => $validated['name'],
            'description' => $validated['description'] ?? null,
            'price' => $validated['price'],
            'image' => $imagePath,
            'category' => $validated['category']
        ]);

        return redirect()->route('admin.dashboard')->with('success', 'Item updated successfully.');
    }

    public function destroy($id)
    {
        $this->repository->delete($id);

        return redirect()->route('admin.dashboard')->with('success', 'Item deleted successfully.');
    }
}
