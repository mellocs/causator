<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Job extends Model
{
    use HasFactory;

    public function statuses(): BelongsToMany
    {
        return $this->belongsToMany(Status::class,
            'job_parameters');
    }
}
