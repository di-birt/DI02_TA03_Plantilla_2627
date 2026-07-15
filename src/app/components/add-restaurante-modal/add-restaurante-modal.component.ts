import { Component, inject, signal } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, ModalController, ToastController } from '@ionic/angular';
import { Restaurante } from '../../interface/restaurante';
import { RestauranteService } from '../../services/restaurante.service';

@Component({
  selector: 'app-add-restaurante-modal',
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule],
  templateUrl: './add-restaurante-modal.component.html',
})
export class AddRestauranteModalComponent {

  private fb = inject(FormBuilder);
  private modalCtrl = inject(ModalController);
  private toastCtrl = inject(ToastController);
  private restauranteService = inject(RestauranteService);

  guardando = signal(false);

  //TODO - Añadimos nonNullable para que los controles sean del tipo FormContrl<string> en vez de FormControl<string | null>
  //     - Añadir los campos necesarios y controlar las que son obligatorias
  //     - Al FormGroup le estoy llamando "form", podéis poner el nombre que preferáis
  form = this.fb.nonNullable.group({

  });

  cancelar() {
    //TODO - Haremos un dismiss (data, role), siendo data = null y role = 'cancel'

  }

  //TODO - Importante ponerlo siempre, cuando el formulario sea invalid ponemos todos los campos como touched para mostrar mensajes de error
  async guardar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.guardando.set(true);
    try {
      //TODO - Añadir const restaurante: Restaurante... del enunciado. 
      // Si el objeto restaurante os da error al copiar, es porque en el HTML faltan añadir los campos necesarios.
      // Para poder crear el objeto restaurante de tipo Restaurante, necesitamos los campos del HTML para poder completar el objeto en su totalidad.

      //Llamamos al servicio para añadir el restaurante en Firebase
      
      //Hamos el dismiss del ModalController y en este caso dato: restaurante y role: 'confirm'

    } catch {
      //Si falla podemos mostrar un Toast para notificar al usuario
      const toast = await this.toastCtrl.create({
        message: 'Error al guardar el restaurante en Firebase',
        duration: 3000,
        color: 'danger',
        position: 'bottom',
      });
      await toast.present();
    } finally {
      this.guardando.set(false);
    }
  }
}
