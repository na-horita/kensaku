import ImageShadow from 'react-image-shadow';
import 'react-image-shadow/assets/index.css';

const Sus = () => {
  return (
    <>
      <p>練習用</p>
        <div class="container">
          <div class="row">
            <div class="col">
              <ImageShadow src="https://cdn.pixabay.com/photo/2019/12/17/14/07/amaryllis-4701720_960_720.jpg" />
            </div>
            <div class="col">
            <ImageShadow src="https://images.pexels.com/photos/4652275/pexels-photo-4652275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </div>
          </div>
          <div class="row">
            <div class="col">
            <ImageShadow src="https://cdn.pixabay.com/photo/2019/12/17/14/07/amaryllis-4701720_960_720.jpg" />
            </div>
            <div class="col">
              <ImageShadow src="https://cdn.pixabay.com/photo/2019/12/17/14/07/amaryllis-4701720_960_720.jpg" />
            </div>
            <div class="col">
              <ImageShadow src="https://cdn.pixabay.com/photo/2019/12/17/14/07/amaryllis-4701720_960_720.jpg" />
            </div>
          </div> 
      </div>
    </>
  );
};

export default Sus;
