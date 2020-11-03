const urlApi = "https://assets.breatheco.de/apis/fake/contact/";

const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contactList: []
		},
		actions: {
			loadContact() {
				fetch(urlApi + "agenda/javi-mera")
					.then(response => response.json())
					.then(result => {
						setStore({
							contactList: result
						});
					})
					.catch(e => console.error(e));
			},

			addContact: (fullname, phone, email, address) => {
				fetch(urlApi, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						full_name: fullname,
						phone: phone,
						email: email,
						address: address,
						agenda_slug: "javi-mera"
					})
				}).then(() => {
					fetch(urlApi + "agenda/javi-mera")
						.then(response => response.json())
						.then(addData => {
							setStore({ contactList: addData });
						})
						.catch(e => console.error(e));
				});
			},

			updateContact: (id, fullname, phone, email, address) => {
				fetch(urlApi + id, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						full_name: fullname,
						phone: phone,
						email: email,
						address: address,
						agenda_slug: "javi-mera"
					})
				}).then(() => {
					fetch(urlApi + "agenda/javi-mera")
						.then(response => response.json())
						.then(updatedData => {
							setStore({ contactList: updatedData });
						})
						.catch(e => console.error(e));
				});
			},
			deleteContact: id => {
				fetch(urlApi + id, {
					method: "DELETE"
				}).then(() => {
					fetch(urlApi + "agenda/javi-mera")
						.then(response => response.json())
						.then(deleteData => {
							setStore({ contactList: deleteData });
						})
						.catch(e => console.error(e));
				});
			}
		}
	};
};

export default getState;
