import BlogApi from "../../BlogApi"

export const getData = () => {
	return async () => {
		// const response = await JsonPlaceHolder.get("/posts")
		return ({
			type: "GET_DATA",
			// payload: response.data
		})
	}
}

// export function getData() {
//     return (dispatch) => {
//         return JsonPlaceHolder.get("/posts")
//             .then((response) => {
//                 dispatch({
//                     type: "GET_DATA",
//                     message: "user get list success",
//                     data: response.data,
//                 });
//             })
//             .catch(function (error) {
//                 dispatch({
//                     type: "GET_FAILER",
//                     message: "Something went wrong",
//                 });
//             });
//     };
// }

export const loginUser = (data) => {
	return async () => {
		// const datamain = await JsonPlaceHolder.post("/login", data)
		console.log(data, "mmdddoi")
		return ({
			type: "LOGIN_USER",
			// payload: datamain
		})
	}
}
export const CreateBlog = (data) => {
	return async () => {
		const image = await BlogApi.post("/createblog/uploadimage", data.image, {
			headers: {
				"Content-Type": "application/json",
				"content-type": "multipart/form-data",
			}
		})
		const blogData = await BlogApi.post("/createblog", { image: image.data.image, ...data.blogdata })
		console.log(blogData.data, "mmoisgere")
		return ({
			type: "CREATE_BLOG",
			payload: blogData
		}
		)
	}
}
export const DeletePost = (post, index) => {
	return ({
		type: 'DELETE_POST',
		payload: post.splice(index, 1)
	})
}