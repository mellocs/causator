<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Services\RoleService;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    protected $roleService;
    public function __construct(RoleService $roleService)
    {
        $this->roleService = $roleService;
    }

    public function getAllRoles()
    {
        $roles = $this->roleService->getAllRoles();

        return response()->json([
            'roles' => $roles
        ], 201);
    }

    public function getContactsByRole(int $roleId)
    {
        $contacts = $this->roleService->getContactsByRole($roleId);

        return response()->json([
            'contacts' => $contacts
        ], 201);
    }
}
