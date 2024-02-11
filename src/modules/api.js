const HttpURL = `http://localhost:9000`;

const GetData = async (path) => {
    path = HttpURL + path;

    return await fetch(path).then(res => res.json());
}

const PostData = async (path, data) => {
    path = HttpURL + path;

    return await fetch(path, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json"
        }
    }).then(res => res.json())
}

const PatchData = async (path, data) => {
    path = HttpURL + path;

    return await fetch(path, {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json"
        }
    }).then(res => res.json())
}

export { GetData, PostData, PatchData } 