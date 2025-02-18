const pinned_repos_url = "https://pinned.berrysauce.dev/get/AshkanFeyzollahi";

fetch(pinned_repos_url)
    .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        return response.json();
    })
    .then(pinned_repos => {
        for (let repo of pinned_repos) {
            $("#projects").append(
                '<div class="shadow p-3 m-2 rounded-2 repo">' +
                    `<p class="m-0"><i class="bi bi-book"></i> <a style="margin-left: 5px;" href="https://github.com/${repo.author}/${repo.name}">${repo.author}/${repo.name}</a></p>` +
                    `<p class="m-0 text-truncate" style="font-size: 10pt; margin-top: 5px;">${repo.description}</p>` +
                    `<p class="m-0 mt-2"><i class="language">${repo.language}</i> &nbsp;&nbsp; <i class="bi bi-star star"></i> ${repo.stars}</p>` +
                '</div>'
            );
        }
    });
