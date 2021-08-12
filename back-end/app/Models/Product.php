<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable  = [
        'name', 
        'imagesUrl',
        'price', 
        'code',
        'options', 
        'rating',
        'description',
    ];
    protected $table = "products";

    public $timestamps = true;

    public function order(){
        return $this->hasMany(Order::class);
    }
}
