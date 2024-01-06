package com.nagarro.ApiExitTest.entities;


import javax.persistence.Entity;

import javax.persistence.Id;

@Entity
public class User {
	
	@Id
	private String emailid;
	private String firstname;
	private String lastname;
	private String password;
	private String usertype;
	
	public String getEmailid() {
		return emailid;
	}
	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getUsertype() {
		return usertype;
	}
	public void setUsertype(String usertype) {
		this.usertype = usertype;
	}
	public User(String emailid, String firstname, String lastname, String password, String usertype) {
		super();
		this.emailid = emailid;
		this.firstname = firstname;
		this.lastname = lastname;
		this.password = password;
		this.usertype = usertype;
	}
	public User() {
		super();
	}
	@Override
	public String toString() {
		return "User [emailid=" + emailid + ", firstname=" + firstname + ", lastname=" + lastname
				+ ", password=" + password + ", usertype=" + usertype + "]";
	}
	
	

}
