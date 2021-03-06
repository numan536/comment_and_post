import React from 'react';

class Posts extends React.Component {
  render() {
    return (
      <div>
        <div class="container">
          <div class="well">
            <div class="media">
              <a class="pull-left" href="#">
                <img
                  class="media-object"
                  src="http://placekitten.com/150/150"
                />
              </a>
              <div class="media-body">
                <h4 class="media-heading">Receta 1</h4>
                <h4>How this is Title</h4>
                <p class="text-right">By Francisco</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  pharetra varius quam sit amet vulputate. Quisque mauris augue,
                  molestie tincidunt condimentum vitae, gravida a libero. Aenean
                  sit amet felis dolor, in sagittis nisi. Sed ac orci quis
                  tortor imperdiet venenatis. Duis elementum auctor accumsan.
                  Aliquam in felis sit amet augue.
                </p>
                <ul class="list-inline list-unstyled">
                  <li>
                    <span>
                      <i class="glyphicon glyphicon-calendar"></i> 2 days, 8
                      hours{' '}
                    </span>
                  </li>
                  <li>|</li>
                  <span>
                    <i class="glyphicon glyphicon-comment"></i> 2 comments
                  </span>
                  <li>|</li>
                  <li>
                    <span class="glyphicon glyphicon-star"></span>
                    <span class="glyphicon glyphicon-star"></span>
                    <span class="glyphicon glyphicon-star"></span>
                    <span class="glyphicon glyphicon-star"></span>
                    <span class="glyphicon glyphicon-star-empty"></span>
                  </li>
                  <li>|</li>
                  <li>
                    <span>
                      <i class="fa fa-facebook-square"></i>
                    </span>
                    <span>
                      <i class="fa fa-twitter-square"></i>
                    </span>
                    <span>
                      <i class="fa fa-google-plus-square"></i>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="well">
            <div class="media">
              <a class="pull-left" href="#">
                <img
                  class="media-object"
                  src="http://placekitten.com/150/150"
                />
              </a>
              <div class="media-body">
                <h4 class="media-heading">Receta 2</h4>
                <h4>How this is Title 2</h4>
                <p class="text-right">By Anailuj</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  pharetra varius quam sit amet vulputate. Quisque mauris augue,
                  molestie tincidunt condimentum vitae, gravida a libero. Aenean
                  sit amet felis dolor, in sagittis nisi. Sed ac orci quis
                  tortor imperdiet venenatis. Duis elementum auctor accumsan.
                  Aliquam in felis sit amet augue.
                </p>
                <ul class="list-inline list-unstyled">
                  <li>
                    <span>
                      <i class="glyphicon glyphicon-calendar"></i> 2 days, 8
                      hours{' '}
                    </span>
                  </li>
                  <li>|</li>
                  <span>
                    <i class="glyphicon glyphicon-comment"></i> 2 comments
                  </span>
                  <li>|</li>
                  <li>
                    <span class="glyphicon glyphicon-star"></span>
                    <span class="glyphicon glyphicon-star"></span>
                    <span class="glyphicon glyphicon-star"></span>
                    <span class="glyphicon glyphicon-star"></span>
                    <span class="glyphicon glyphicon-star-empty"></span>
                  </li>
                  <li>|</li>
                  <li>
                    <span>
                      <i class="fa fa-facebook-square"></i>
                    </span>
                    <span>
                      <i class="fa fa-twitter-square"></i>
                    </span>
                    <span>
                      <i class="fa fa-google-plus-square"></i>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Posts;
