
  const products =[
    {id: 1, "name": "Celular", price: "8000", img:'https://www.eltiempo.com/files/article_content/files/crop/uploads/2020/02/03/5e38409f1bcb0.r_1580745285279.168-0-1128-720.jpeg'},
    {id: 2, "name": "Tablet",  price: "9000", img:'https://static1.abc.es/media/favorito/2021/08/13/tablet-lenovo-10-pulgadas-U27241110355FQN-510x349@abc.jpg'},
    {id: 3, "name": "Iphone",  price: "20000", img:'https://sc04.alicdn.com/kf/Hde3a820d47e84e5bb1df4884feec60cfu.jpg'}]

   export const getProducts = () =>{
       
    

        return new Promise((resolve, reject) =>{
            setTimeout(() =>{
                resolve(products);
            }, 2000)
        })
    }

 
