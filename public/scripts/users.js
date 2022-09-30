// Client facing scripts here
$(() => {
  $('#fetch-users').on('click', () => {
    $.ajax({
      method: 'GET',
      url: '/api/users'
    })
    .done((response) => {
      const $usersList = $('#users');
      $usersList.empty();

      for(const user of response.users) {
        $(`<li class="user">`).text(user.name).appendTo($usersList);
      }
    });
  });
});




const renderTweets = (tweets) => {

  $('#tweets-container').empty();
  for (let tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    $('#tweets-container').prepend($tweet);
  }
};

const loadTweets = () => {
  $.get("/tweets")
    .then((data) => {
      renderTweets(data);
      //console.log("Success: ", renderTweets);
    });
};
