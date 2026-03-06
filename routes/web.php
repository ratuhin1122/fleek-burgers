<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use App\Http\Controllers\AdminAuthController;
use App\Http\Controllers\AdminMenuController;
use App\Http\Middleware\CheckAdmin;
use App\Repositories\ProductRepository;

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

Route::get('/menu', function (ProductRepository $repository) {
    $items = $repository->getAllDesc();
    return Inertia::render('menu', [
        'items' => $items
    ]);
})->middleware('throttle:60,1')->name('menu');

require __DIR__.'/settings.php';

// Admin Routes
Route::prefix('admin')->group(function () {
    Route::get('/login', [AdminAuthController::class, 'showLogin'])->name('admin.login');
    Route::post('/login', [AdminAuthController::class, 'login'])->middleware('throttle:5,1');
    
    Route::group(['middleware' => [CheckAdmin::class]], function () {
        Route::post('/logout', [AdminAuthController::class, 'logout'])->name('admin.logout');
        Route::get('/dashboard', [AdminMenuController::class, 'index'])->name('admin.dashboard');
        Route::get('/items/create', [AdminMenuController::class, 'create'])->name('admin.items.create');
        Route::post('/items', [AdminMenuController::class, 'store'])->name('admin.items.store');
        Route::get('/items/{id}/edit', [AdminMenuController::class, 'edit'])->name('admin.items.edit');
        Route::put('/items/{id}', [AdminMenuController::class, 'update'])->name('admin.items.update');
        Route::delete('/items/{id}', [AdminMenuController::class, 'destroy'])->name('admin.items.destroy');
    });
});
