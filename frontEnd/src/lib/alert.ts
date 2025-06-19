import Swal from "sweetalert2";

export async function alertSuccess(message:any) {
  return Swal.fire({
    icon:'success' ,
    title: 'Success',
    text: message
  });
}

export async function alertError(message:any) {
  return Swal.fire({
    icon:'error' ,
    title: 'Ups',
    text: message
  });
}
