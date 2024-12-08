Voici une version améliorée et enrichie du fichier `README.md` de votre projet :

---

# NX Todo List Clean Architecture

Ce projet est une application Angular Todo List développée en suivant les principes de la **Clean Architecture**. Le but est de pratiquer et d'explorer la Clean Architecture côté front en séparant strictement la logique métier de la technologie front utilisée (Angular). Cette approche permettrait de réutiliser les couches métier et adaptateur dans une autre stack front, comme React.

---

## **Objectifs**

- Découpler la logique métier de la stack technologique (framework ou UI).
- Garantir la testabilité et la maintenabilité grâce à une architecture modulaire.
- Pratiquer la Clean Architecture dans un contexte frontend.

---

## **Structure du projet**

### **Répertoire principal**

- **`apps`** : Contient l'application Angular `todolist-clean-archi`.
- **`package/domain`** : Contient la logique métier (use cases, entités, ports).
- **`package/adapter`** : Contient les adaptateurs (présentateurs et contrôleurs) qui servent de pont entre la logique métier et l'interface utilisateur.

### **Organisation des couches**

1. **Domaine (`package/domain`)** :
  - Contient les entités métier, les cas d'utilisation (Use Cases), et les interfaces des ports.
  - Exemple :
    - **Entité** : `Todolist` (représente une tâche).
    - **Use Case** : `AjouterTodolistUseCase` (implémente la logique pour ajouter une tâche).

2. **Adaptateur (`package/adapter`)** :
  - Implémente les ports définis dans le domaine.
  - Contient les :
    - **Présentateurs** : Formatte les données du domaine pour les rendre lisibles par l'interface utilisateur.
    - **Contrôleurs** : Coordonne les interactions entre l'interface utilisateur et le domaine.

3. **Application (`apps/todolist-clean-archi`)** :
  - Contient l'application Angular.
  - Se limite à la gestion de la vue et s'appuie sur les couches adaptateur et domaine pour la logique.

---

## **Flux des interactions**

1. **L'utilisateur interagit avec l'interface utilisateur (Angular Form).**
2. Les données sont envoyées au contrôleur via un composant Angular.
3. Le contrôleur appelle un cas d'utilisation (`UseCase`) du domaine.
4. Le `UseCase` effectue la logique métier et notifie un présentateur.
5. Le présentateur met à jour un `ViewModel`, qui est observé par le composant Angular.
6. L'interface utilisateur est mise à jour automatiquement via l'observable.




## **Installation**

2. Installez les dépendances :
   ```bash
   npm install
   ```

3. Lancez l'application :
   ```bash
   nx serve todolist-clean-archi
   ```

4. Ouvrez votre navigateur à l'adresse suivante : [http://localhost:4200](http://localhost:4200).

---

## **Fonctionnalités**

### **Ajout d'une tâche**
- Remplissez les champs `titre` et `valeur` dans le formulaire.
- Cliquez sur le bouton **"Valider"**.
- Les détails de la tâche ajoutée s'affichent dans la section **"Détails de la Todo ajoutée"**.

---

## **Tests**

### **Tests unitaires**
Exécutez les tests unitaires pour vérifier la logique des différentes couches :
```bash
nx test <nom_du_projet>
```

### **Analyse statique**
Utilisez `lint` pour garantir la qualité et la cohérence du code :
```bash
nx lint <nom_du_projet>
```

---

# Zoom

## **Usage de `$vm`**

### **Rôle de `$vm`**
- `$vm` est une projection de l'état du composant Angular.
- Il encapsule les données formatées spécifiquement pour la vue.
- Utilise un **observable** pour mettre à jour l'interface utilisateur de manière réactive.

### **Processus de mise à jour**

1. Le **présentateur** (`AjouterTodolistPresenter`) met à jour le `ViewModel` avec les données formatées :
   ```typescript
   notifyTodolist(todolist: Todolist): void {
       this.vm.id = todolist.id;
       this.vm.titre = todolist.titre;
       this.vm.valeur = todolist.valeur;
       this.notifyVM(); // Notifie les observateurs
   }
   ```

2. Le **composant Angular** souscrit au `ViewModel` via `$vm` :
   ```typescript
   $vm: Observable<AjouterTodolistPresenterVM> = new Observable(subscriber =>
       this.ajouterTodolistController.subscribeVM(vm => subscriber.next(vm))
   );
   ```

3. La vue Angular affiche les données mises à jour :
   ```html
   <div *ngIf="($vm | async) as todo" class="todo-preview">
     <h2>Détails de la Todo ajoutée</h2>
     <ul>
       <li><strong>ID:</strong> {{todo.id}}</li>
       <li><strong>Titre:</strong> {{todo.titre}}</li>
       <li><strong>Valeur:</strong> {{todo.valeur}}</li>
     </ul>
   </div>
   ```


## **Ressources**

- [Documentation NX](https://nx.dev)
- [Documentation Angular](https://angular.io)
- [presentation clean architecture dans le web](https://www.youtube.com/watch?v=4v5Bf6qwAY8)
