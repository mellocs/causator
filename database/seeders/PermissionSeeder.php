<?php

namespace Database\Seeders;

use App\Models\Permission;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Permission::create(['name' => 'viewing']);
        Permission::create(['name' => 'editing']);
        Permission::create(['name' => 'creating']);
        Permission::create(['name' => 'executing']);
    }
}
