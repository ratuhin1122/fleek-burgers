<?php

namespace App\Repositories;

use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Illuminate\Support\Facades\Storage;

class ProductRepository
{
    public function getAllDesc()
    {
        return DB::select('SELECT * FROM menu_items ORDER BY id DESC');
    }

    public function findById($id)
    {
        return DB::selectOne('SELECT * FROM menu_items WHERE id = ? LIMIT 1', [$id]);
    }

    public function create(array $data)
    {
        $now = Carbon::now();

        DB::insert(
            'INSERT INTO menu_items (name, description, price, image, category, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [
                $data['name'],
                $data['description'] ?? null,
                $data['price'],
                $data['image'] ?? null,
                $data['category'],
                $now,
                $now
            ]
        );
    }

    public function update($id, array $data)
    {
        DB::update(
            'UPDATE menu_items SET name = ?, description = ?, price = ?, image = ?, category = ?, updated_at = ? WHERE id = ?',
            [
                $data['name'],
                $data['description'] ?? null,
                $data['price'],
                $data['image'] ?? null,
                $data['category'],
                Carbon::now(),
                $id
            ]
        );
    }

    public function delete($id)
    {
        $item = $this->findById($id);
        
        if ($item && $item->image && str_starts_with($item->image, '/storage/')) {
            Storage::disk('public')->delete(str_replace('/storage/', '', $item->image));
        }

        DB::delete('DELETE FROM menu_items WHERE id = ?', [$id]);
    }
}
