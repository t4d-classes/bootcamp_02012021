# Exercise 15

1. Implement sorting on the car table. When a column header is clicked, sort the table on that column.

2. Sorting code. Remember sorts are done in-place. Take that into account.

```javascript
let sortField = 'name';

colorList.sort((a,b) => {
  if (a[sortField]<b[sortField]) return -1;
  else if (a[sortField]>b[sortField]) return 1;
  else return 0;
});
```

3. All state data (except car form state) must be stored in the car tool store.

4. Ensure it works!