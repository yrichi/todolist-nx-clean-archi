import {DisplayNotePresentation, Note} from "../../index";

export class DisplayNotesPresentationBuilder {
  private notifyNewNotes: (notes: Note[]) => void = ()=> undefined;
  private notifyNoteDeleted: () => void = ()=> undefined;

  withNotifyNewNotes(displayNotes: (notes: Note[])=>void){
    this.notifyNewNotes = displayNotes;
    return this;
  }

  withNotifyNoteDeleted(deleteNote: ()=>void){
    this.notifyNoteDeleted = deleteNote;
    return this;
  }


  build(): DisplayNotePresentation {
    return {
      notifyNewNotes: this.notifyNewNotes,
      notifyNoteDeleted: this.notifyNoteDeleted
    }
  }
}

