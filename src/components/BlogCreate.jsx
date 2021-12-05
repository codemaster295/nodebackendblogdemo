import React from 'react'
// import { Alert, Col, Form, Row ,Button } from 'react-bootstrap'
import { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { getData, DeletePost, loginUser, CreateBlog } from '../Store/Actions'
import { Upload } from 'antd';
import 'antd/dist/antd.css';
import ImgCrop from 'antd-img-crop';
import { Container, Grid } from '@mui/material';




const BlogCreate = () => {
	const [blogTitle, setBlogTitle] = useState("")
	const [blogDescription, setBlogDescription] = useState("")
	const [error, setError] = useState("")
	const [fileList, setFileList] = useState([])
	const userDataRedux = useSelector((state) => state);
	const dispatch = useDispatch()
	
	const handleSubmit = async (e) => {
		e.preventDefault()
		let formData = new FormData();
		formData.append("image", fileList[0].originFileObj)
		await dispatch(CreateBlog({ image: formData, blogdata: { blogTitle, blogDescription } }))

	}
	const onPreview = async file => {
		let src = file.url;
		if (!src) {
			src = await new Promise(resolve => {
				const reader = new FileReader();
				reader.readAsDataURL(file.originFileObj);
				reader.onload = () => resolve(reader.result);
			});
		}
		const image = new Image();
		image.src = src;
		const imgWindow = window.open(src);
		imgWindow.document.write(image.outerHTML);
	};
	const onChange = ({ fileList: newFileList }) => {
		setFileList(newFileList);
	};
	console.log(fileList, "mmoishere")
	const dummyRequest = ({ file, onSuccess }) => {
		setTimeout(() => {
			onSuccess('ok')
		}, 0)
	}
	return (
	

			<form onSubmit={handleSubmit}>
			
				<ImgCrop rotate aspect={16 / 9}>
					<Upload
						multiple={false}
						customRequest={dummyRequest}
						listType="picture-card"
						onChange={onChange}
						onPreview={onPreview}
					>
						{fileList.length < 1 && '+ Upload'}
					</Upload>
				</ImgCrop>
				<button variant="primary" type="submit">
					Submit
				</button>
				</form>
				
	)
}

export default BlogCreate
