const UserTable = (props) => {
	return (
		<table className="table table-striped table-bordered">
			<thead className="thead-dark text-center">
				<tr>
					<th>S.No.</th>
					<th>Name</th>
					<th>City</th>
					<th>Phone No.</th>
					<th>Email Id</th>
					<th>Role</th>
					<th>Active</th>
					<th>Edit</th>
					<th>Delete</th>
				</tr>
			</thead>
			<tbody>
				{props.userList &&
					props.userList.map((user, idx) => {
						return (
							<tr key={user._id}>
								<td className="text-center">{idx + 1}</td>
								<td>{user.name}</td>
								<td>{user.city}</td>
								<td>{user.phone}</td>
								<td>{user.email}</td>
								<td>{user.role}</td>
								<td className=" text-center">
									{user.isActive ? (
										<button
											type="button"
											className="btn btn-primary"
											data-toggle="modal"
											data-target="#deactivateUser"
										>
											Deactivate
										</button>
									) : (
										<button
											type="button"
											className="btn btn-primary"
											data-toggle="modal"
											data-target="#activateUser"
										>
											Activate
										</button>
									)}
								</td>
								<td className=" text-center">
									<button
										type="button"
										className="btn btn-warning"
										data-toggle="modal"
										data-target="#exampleModal"
										data-whatever="@mdo"
									>
										Edit
									</button>
								</td>
								<td className=" text-center">
									<button
										type="button"
										className="btn btn-danger"
										data-toggle="modal"
										data-target="#deleteUser"
									>
										Delete
									</button>
								</td>
							</tr>
						);
					})}
			</tbody>
		</table>
	);
};

export default UserTable;
