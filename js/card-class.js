class Card {
  avatar;
  last_name;
  first_name;
  id;
  email;

  constructor(avatar, last_name, first_name, id, email) {
    this.avatar = avatar;
    this.last_name = last_name;
    this.first_name = first_name;
    this.id = id;
    this.email = email;
  }
  basicCard() {
    return `
            <div class="card" style="width: 18rem;">
            <div class="card-header">
            <span class="badge rounded-pill text-white bg-dark text-center">${this.id}</span>
            </div>
            <img src="${this.avatar}" class="card-img-top" alt="Imagen del usuario">
            <div class="card-body">
            <p class="card-text text-center">${this.email}</p>
            <h5 class="card-title text-center">${this.first_name} ${this.last_name}</h5>
            </div>
            </div>
    
    `;
  }
}
export { Card };

/*<article class="col-sm-6 col-lg-3" >
    <div class="card mx-auto mb-2" style="min-height: 20rem;">
     <img src="${this.avatar}" class="card-img-top" alt="..." >         
     <div class="card-body">
       <h5 class="card-title">${this.last_name}</h5>
       <p class="card-text"> ${this.first_name}</p>
       <a href="#" class="btn btn-success">Go somewhere</a>
     </div>
    </div>          
    </article>
    */
