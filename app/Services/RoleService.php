<?php

namespace App\Services;

use App\Repositories\RoleRepository;

class RoleService
{
    protected $roleRepository;
    public function __construct(RoleRepository $roleRepository)
    {
       $this->roleRepository = $roleRepository;
    }

    public function getAllRoles()
    {
        return $this->roleRepository->getAllRoles();
    }

    public function getContactsByRole($roleId)
    {
        return $this->roleRepository->getContactsByRole($roleId);
    }
}
