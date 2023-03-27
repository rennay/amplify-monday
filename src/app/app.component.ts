import { Component } from '@angular/core';

import { Storage } from 'aws-amplify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'amplify-monday';

  async storage() {
    console.log('Storage ***...');
    const result = await Storage.put("test.txt", "Hello");
    console.log(result);
  }

  // async onChange(e: any) {
  //   console.log('onChange...');
  //   const file = e.target.files[0];
  //   try {
  //     await Storage.put(file.name, file, {
  //       contentType: "image/png", // contentType is optional
  //     });
  //   } catch (error) {
  //     console.log("Error uploading file: ", error);
  //   }
  // }

  fileToUpload: File | null = null;

  // https://medium.com/better-programming/upload-files-in-ionic-angular-apps-784f0c382eb0
  async handleFileInput(event: any) {
    console.log('handleFileInput...');
    console.log(event.target.files);
    const file = event.target.files[0];
    try {
      await Storage.put(file.name, file, {
        contentType: "image/png", // contentType is optional
      });
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }
}
