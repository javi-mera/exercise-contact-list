import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import Rickmorty from "../../img/rickmorty.jpg";
import "../../styles/home.scss";

export const ContactCard = props => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			{store.contactList &&
				store.contactList.map((item, index) => {
					return (
						<li className="list-group-item" key={index}>
							<div className="row w-100">
								<div className="col-12 col-sm-6 col-md-3 px-0">
									<img
										src={Rickmorty}
										alt="Rick y Morty"
										className="rounded-circle mx-auto d-block img-fluid"
									/>
								</div>
								<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
									<div className=" float-right">
										<Link to={`/edit/${index}`}>
											<button className="btn">
												<i className="fas fa-pencil-alt mr-3" />
											</button>
										</Link>
										<button
											className="btn"
											onClick={() => {
												actions.deleteContact(item.id);
											}}>
											<i className="fas fa-trash-alt" />
										</button>
									</div>
									<label className="name lead">{item.full_name}</label>
									<br />
									<i className="fas fa-map-marker-alt text-muted mr-3" />
									<span className="text-muted">{item.address}</span>
									<br />
									<span
										className="fa fa-phone fa-fw text-muted mr-3"
										data-toggle="tooltip"
										title=""
										data-original-title="(870) 288-4149"
									/>
									<span className="text-muted small">{item.phone}</span>
									<br />
									<span
										className="fa fa-envelope fa-fw text-muted mr-3"
										data-toggle="tooltip"
										data-original-title=""
										title=""
									/>
									<span className="text-muted small text-truncate">{item.email}</span>
								</div>
							</div>
						</li>
					);
				})}
		</div>
	);
};

/**
 * Define the data-types for
 * your component's properties
 **/
ContactCard.propTypes = {
	history: PropTypes.object,
	deleteContact: PropTypes.func
};

/**
 * Define the default values for
 * your component's properties
 **/
ContactCard.defaultProps = {
	deleteContact: null
};
