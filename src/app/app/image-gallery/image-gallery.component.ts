import { Component, OnInit } from '@angular/core';
import {ImageService} from '../../_services/image.service';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {
  content?: any;
  imageToShow: any;
  isImageLoading: any;
  fileName = '';
  constructor(private imageService: ImageService, private http: HttpClient) { }

  ngOnInit(): void {
    this.isImageLoading = true;
    this.imageService.getImages()

      .subscribe(

      data => {
        this.createImageFromBlob(data);
        this.isImageLoading = false;
      },
      error => {
        this.isImageLoading = false;
        this.content = JSON.parse(error.error).message;
      }
    );
  }


  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.imageToShow = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }

  onFileSelected($event: Event) {

  }
}
