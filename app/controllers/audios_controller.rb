class AudiosController < ApplicationController
  before_action :set_audio, only: [:show, :edit, :update, :destroy]

  def index
  end

  def show
    # 今は仮にjsonが返ります
    render json: @audio
  end

  def new

  end

  def create
    @audio = Audio.new(audio_params)

    respond_to do |format|
      if @audio.save
        format.html { redirect_to root_path, notice: '投稿しました' }
        format.json { render json: @user, status: :created}
      else
        format.html { render :new }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  private
    def set_audio
      @audio = Audio.find(params[:id])
    end

    def audio_params
      params.require(:audio).permit(:user_id, :update_time, :title, :description, :filename, :length)
    end
end
