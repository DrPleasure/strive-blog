import React from 'react'

export default function FileUpload() {
  return (
    <div>
        <h1>Hello</h1>
    <form action="/upload" method="post" enctype="multipart/form-data">
  <input type="file" name="file"/>
  <button type="submit">Upload</button>
</form>
</div>
  )
}
