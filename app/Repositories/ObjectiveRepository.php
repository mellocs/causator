<?php

namespace App\Repositories;

use App\Models\Objective;

class ObjectiveRepository
{

    public function getAll()
    {
        return Objective::all();
    }

    public function getObjectiveById(int $id)
    {
        return Objective::where('id', $id)->first();
    }

    public function getObjectivesByStatus($status = 'waiting')
    {
        return Objective::where('status', $status)->get();
    }

    public function getObjectivesByType($type = 'system')
    {
        return Objective::where('type', $type)->get();
    }
}
