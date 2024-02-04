<?php

namespace App\Repositories;

use App\Models\Contact;
use App\Models\Role;

class RoleRepository
{
    public function getAllRoles()
    {
        return Role::all();
    }

    public function getContactsByRole($roleId)
    {
        return Contact::where('role_id', $roleId)->get();
    }
}
