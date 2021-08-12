<?php


namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Http\Resources\Product as ProductResource;

class ProductController extends Controller
{

    public function index(){
        $products = Product::paginate(15);
        return ProductResource::collection($products);
    }
    
    
    public function show($id){
        $product = Product::findOrFail( $id );
        return new ProductResource( $product );
    }
    
    public function store(Request $request){
        $product = new Product;
        $product->titulo = $request->input('titulo');
        $product->conteudo = $request->input('conteudo');

        if( $product->save() ){
            return new ProductResource( $product );
        }
    }

    public function update(Request $request){
        $product = Product::findOrFail( $request->id );
        $product->titulo = $request->input('titulo');
        $product->conteudo = $request->input('conteudo');

        if( $product->save() ){
            return new ProductResource( $product );
        }
    } 

    public function destroy($id){
        $product = Product::findOrFail( $id );
        if( $product->delete() ){
            return new ProductResource( $product );
        }
    }
}