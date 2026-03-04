<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;
use Carbon\Carbon;

class AdminAndMenuSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('admins')->insert([
            'email' => 'admin@gmail.com',
            'password' => '12345678', // Plain text to allow raw SQL authentication query
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        $faker = Faker::create();
        $categories = ['beef', 'chicken', 'vegetarian', 'mutton', 'sides'];

        for ($i = 0; $i < 10; $i++) {
            DB::table('menu_items')->insert([
                'name' => ucwords($faker->words(3, true)),
                'description' => $faker->sentence(10),
                'price' => $faker->randomFloat(2, 5, 25),
                'image' => '/images/burger-' . $faker->numberBetween(1, 3) . '.webp',
                'category' => $faker->randomElement($categories),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);
        }
    }
}
