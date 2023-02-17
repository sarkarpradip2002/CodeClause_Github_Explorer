fetchDetails= async()=>{
    var username=document.getElementById('username').value;
    var result=document.getElementById('result');
    
    var response=await fetch(`https://api.github.com/users/${username}`)
    var ans=await response.json();
    console.log(ans);

    var dummy=`<div>
      <div>Username : <a class="link-class" href= ${ans.html_url} target=_blank>${ans.login}</a></div>
      <div>Name : ${ans.name}</div>
      <div><a class="link-class" href= ${ans.avatar_url} target=_blank>Show Avatar</a></div>
      <div>Followers : ${ans.followers}</div>
      <div>Total Repos : ${ans.public_repos}
      <button class="fetchuser" onClick="fetchRepos()">Fetch the repos</button>
      </div>
      <div id="repos"></div>
      <div><a class="link-class" href= "${ans.html_url}?tab=repositories" target=_blank>Go to the Repos</a></div>
    </div>
    `

    result.innerHTML=dummy
}

fetchRepos=async()=>{
    var repos=document.getElementById('repos');
    var username=document.getElementById('username').value;

    var response=await fetch(`https://api.github.com/users/${username}`)
    var ans=await response.json();
     var getrepos=await fetch(`${ans.repos_url}`)
     var takerepos=await getrepos.json();
     console.log(takerepos)

    for (let i=0;i<takerepos.length;i++){
      repos.innerHTML+=`<a class="link-class" target="_blank" href=${takerepos[i].clone_url}><div>${i+1}. ${takerepos[i].name}</div></a>`;
    }



}