<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Order extends Model  
{
    

    use HasFactory;
    protected $fillable  = [
        'order_id', 
        'product_id'
    ];
    
    protected $table = "orders";

    public $timestamps = true;

    public function product(){
        return $this->hasMany(Product::class);
    }
}
