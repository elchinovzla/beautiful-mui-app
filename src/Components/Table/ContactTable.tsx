import { Table, TableBody, TableContainer, TableCell, TableHead, TableRow } from "@mui/material";
import { contactData } from "../../Data/ContactData";
import React from "react"

const ContactTable = () => {
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Role</TableCell>
                        <TableCell>Skills</TableCell>
                        <TableCell>Start Date</TableCell>
                        <TableCell>Preference</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        contactData.map((contact) => {
                            return (
                                <TableRow key={contact.id}>
                                    {
                                        Object.entries(contact).map(([key, value]) => {
                                            if(key === "skills") {
                                                return (
                                                <TableCell key={key + '-' + contact.name}>{value.join(', ')}</TableCell>
                                                )
                                            }
                                            if(key!=="id") {
                                                return (
                                                <TableCell key={key + '-' + contact.name}>{value}</TableCell>
                                                )
                                            }
                                            return "";
                                        })
                                    }
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ContactTable;