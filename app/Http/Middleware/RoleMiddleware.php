<?php

namespace App\Http\Middleware;

use App\Models\Contact;
use App\Services\RoleService;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class RoleMiddleware
{
    protected $roleService;

    public function __construct(RoleService $roleService)
    {
        $this->roleService = $roleService;
    }

    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, $role): Response
    {
        if (!Auth::check() || !$this->roleService->hasRole($role)) {
            return response()->json([
                'message' => 'Not enough rights'
            ]);
        }
        return $next($request);
    }
}
