class Api::UsersController < ApplicationController
    
    def create
        @user = User.new(user_params);
        if @user.save 
            puts"userID: #{@user.id}"
           @cart = Cart.new(user_id: @user.id, quantity: 0)
            if @cart.save! 
                puts "saved to cart successfully"
            else
                puts "Error not adding to cart"
            end
            login(@user)
            render "api/users/show"
            
        else
            render json: @user.errors.full_messages, status: 422

        end
    end

    def show
        @user = User.find_by(id:current_user.id)
        render "api/users/show"
    end

    private

    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
end
