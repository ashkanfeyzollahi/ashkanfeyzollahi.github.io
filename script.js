const pinned_repos_url = "https://pinned.berrysauce.dev/get/AshkanFeyzollahi";

fetch(pinned_repos_url)
    .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        return response.json();
    })
    .then(pinned_repos => {
        for (let repository of pinned_repos) {
            $("#projects").append(
                '<div class="repository border p-3 m-2 rounded-2">' +
                    `<p class="m-0"><i class="bi bi-book"></i> <a style="margin-left: 5px;" href="https://github.com/${repository.author}/${repository.name}">${repository.author}/${repository.name}</a></p>` +
                    `<p class="m-0 text-truncate" style="font-size: 10pt; margin-top: 5px;">${repository.description}</p>` +
                '</div>'
            );
        }
    });
