<?php

namespace Database\Seeders;

use App\Models\Group;
use Illuminate\Database\Seeder;

class GroupSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Group::factory()->create(['name' => 'undefined']); // неопределенный
        Group::factory()->create(['name' => 'client']); // клиент
        Group::factory()->create(['name' => 'worker']); // работник
    }
}
