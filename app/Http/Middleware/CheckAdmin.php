<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Simple session-based check as requested (custom token logic removed)
        if (!session('admin_logged_in')) {
            if ($request->expectsJson()) {
                return response()->json(['message' => 'Unauthorized.'], 401);
            }
            return redirect()->route('admin.login');
        }

        return $next($request);
    }
}
