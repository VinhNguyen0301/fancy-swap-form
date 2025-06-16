/**
 *  Các vấn đề tồn tại trong đoạn code gốc:
 * 
 * 1. Hàm `getPriority()` khai báo bên trong component
 *    → Mỗi lần render sẽ tạo lại hàm mới, không cần thiết.
 *    → Lẽ ra nên đưa ra ngoài vì nó là hàm thuần (pure function).
 * 
 * 2. Gọi `getPriority()` lặp lại nhiều lần
 *    → Bị gọi trong filter, sort, map → gây dư thừa tính toán.
 *    → Có thể tính sẵn và lưu lại priority 1 lần cho từng balance.
 * 
 * 3. Điều kiện filter khó đọc, logic rối
 *    → Đoạn:
 *      if (!hasPriority) {
 *        if (balance.amount <= 0) return true;
 *      }
 *      return false;
 *    → Không rõ ràng, dễ gây hiểu nhầm.
 * 
 * 4. `map()` 2 lần trên cùng 1 mảng `sortedBalances`
 *    → Một lần để format lại dữ liệu, một lần để render UI.
 *    → Nên gộp lại thành 1 lần `map()` duy nhất.
 * 
 * 5. Dùng `index` làm `key` trong render list
 *    → Không ổn nếu danh sách thay đổi thứ tự hoặc thêm/xoá item.
 *    → Nên dùng `currency` hoặc `currency-amount` làm key cho an toàn.
 * 
 * * ✅ Giải pháp đề xuất: (code refactor in WalletPage.tsx)
 * 
 * - Đưa hàm `getPriority()` ra ngoài component để tránh tạo lại mỗi lần render.
 * - Trong bước `useMemo`, gộp tất cả xử lý: tính priority, lọc, sort, format trong 1 lần `map()`.
 * - Tính `usdValue` trong cùng bước `map()` để tránh lặp thêm.
 * - Dùng `currency` làm key khi render thay vì `index`.
 * - Refactor `filter` và `sort` cho dễ hiểu và dễ maintain hơn.
 */
