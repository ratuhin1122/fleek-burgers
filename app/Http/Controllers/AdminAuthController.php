<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class AdminAuthController extends Controller
{
    public function showLogin()
    {
        if (session('admin_logged_in')) {
            return redirect()->route('admin.dashboard');
        }
        return Inertia::render('Admin/Login');
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if ($request->email === env('ADMIN_EMAIL') && $request->password === env('ADMIN_PASSWORD')) {
            $token = bin2hex(random_bytes(32));
            session(['admin_logged_in' => true]);
            session(['admin_id' => 1]);
            session(['admin_token' => $token]);
            return redirect()->route('admin.dashboard')->with('admin_token', $token);
        }

        return back()->withErrors(['email' => 'Invalid credentials.']);
    }

    public function logout()
    {
        session()->forget(['admin_logged_in', 'admin_id', 'admin_token']);
        return redirect()->route('admin.login');
    }
}
