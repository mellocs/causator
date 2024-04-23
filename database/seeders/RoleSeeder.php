<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Role::factory()->create(['name' => 'contractor']); // контрагент
        Role::factory()->create(['name' => 'executor']); // исполнитель
        Role::factory()->create(['name' => 'dispatcher']); // диспетчер
        Role::factory()->create(['name' => 'administrator']); // администратор
        Role::factory()->create(['name' => 'owner']); // владелец
        Role::factory()->create(['name' => 'user']); // пользователь
    }
}
