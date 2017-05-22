class AudiosController < ApplicationController
  before_action :set_audio, only: [:show, :edit, :update, :destroy]

  def index
    @audios = Audio.all
    respond_to do |format|
      format.html { render :index }
      format.json { render json: @audios, status: :ok }
    end
  end

  def show
    # 今は仮にjsonが返ります
    render json: @audio
  end

  def new
    @audios = Audio.all
    render :index
  end

  def edit
    @audios = Audio.all
    render :index
  end

  def create
    @audio = Audio.new(audio_params)
    respond_to do |format|
      if @audio.save
        format.html { redirect_to root_path, notice: '投稿しました' }
        format.json { render json: @audio, status: :created}
      else
        @audio.errors.each do |k, v|
          logger.debug "#{k}, #{v}"
        end
        format.html { redirect_to root_path, notice: '失敗しました' }
        format.json { render json: @audio.errors, status: :unprocessable_entity }
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
