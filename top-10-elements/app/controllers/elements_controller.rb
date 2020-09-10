class ElementsController < ApplicationController

    def index
        @elements = Element.all
        render json: @elements
    end

    def show 
        @element = Element.find(params[:id])
        render json: @element
    end
    
end
