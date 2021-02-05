const DeleteUser = () => {
	return (
		<div
			className="modal fade"
			id="deleteUser"
			tabIndex="-1"
			aria-labelledby="deleteUserLabel"
			aria-hidden="true"
		>
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id="deleteUserLabel">
							Delete User
						</h5>
						<button
							type="button"
							className="close"
							data-dismiss="modal"
							aria-label="Close"
						>
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						<div className=" d-flex justify-content-around">
							<h4>Are your sure?</h4>
							<button
								type="button"
								className="btn btn-success pl-4 pr-4"
							>
								Yes
							</button>
							<button
								type="button"
								className="btn btn-danger pl-4 pr-4"
								data-dismiss="modal"
							>
								No
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default DeleteUser;
