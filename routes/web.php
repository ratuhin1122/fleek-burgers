<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::get('dashboard', function () {
    return Inertia::render('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/halal', function () {
    return Inertia::render('Halal');
})->name('halal');

Route::get('/menu', function () {
    return Inertia::render('menu');
})->name('menu');

require __DIR__.'/settings.php';
