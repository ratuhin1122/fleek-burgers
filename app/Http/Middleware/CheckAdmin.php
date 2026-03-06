<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckAdmin
{
    public function handle(Request $request, Closure $next): Response
    {
        if (!session('admin_logged_in')) {
            return redirect()->route('admin.login');
        }

        // Verify custom token on POST/PUT/DELETE requests (CSRF protection layer)
        if (in_array($request->method(), ['POST', 'PUT', 'DELETE', 'PATCH'])) {
            $token = $request->bearerToken();
            if (!$token || $token !== session('admin_token')) {
                abort(403, 'Invalid or missing Custom CSRF token.');
            }
        }

        return $next($request);
    }
}
