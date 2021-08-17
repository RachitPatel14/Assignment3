import axios from 'axios';

const url = "http://localhost:5000/api/posts/drum_list/"

class Drum {
    static getPosts() {
        return new Promise( (resolve, reject)  => {
            try {
                const res =  axios.get(url);
                const data = res.data;
                resolve(
                    data.map(post =>  ({
                        ...post,
                        createdAt: new Date(post.createdAt)
                    }))
                );
            } catch (err) {
                reject(err);
            }
        })
    }

    static insertPost(name) {
        return axios.post(url, {
            name: name,
           // best_kit: object.best_kit,
           // brand_name: object.brand_name,
           // founded: object.founded,
           // starting_year: object.starting_year
        });
    }

    static deletePost(id) {
        return axios.delete(`${url}${id}`);
    }
}

export default Drum;