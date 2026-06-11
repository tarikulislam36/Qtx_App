import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import { FileText, Package, Receipt } from "lucide-react-native";

export default function DashboardScreen() {
  return (
    <ScrollView
      className="flex-1 bg-[#FAFAFA]"
      showsVerticalScrollIndicator={false}
    >
      {/* QUICK ACTIONS */}

      <View className="px-6 mt-10">
        <View className="flex-row items-center justify-between">
          <Text className="text-xl font-bold text-slate-900">
            Quick Actions
          </Text>

          <TouchableOpacity>
            <Text className="text-blue-600 font-semibold">View All</Text>
          </TouchableOpacity>
        </View>

        {/* ROW 1 */}

        <View className="flex-row justify-between mt-5">
          {/* QUOTATION */}

          <TouchableOpacity className="w-[48%] bg-blue-600 rounded-[28px] p-5">
            <View className="w-12 h-12 rounded-2xl bg-white/20 items-center justify-center">
              <FileText size={24} color="white" />
            </View>

            <Text className="text-white font-bold text-lg mt-5">Quotation</Text>

            <Text className="text-blue-100 mt-2 text-sm">Create & share</Text>
          </TouchableOpacity>

          {/* INVOICE */}

          <TouchableOpacity className="w-[48%] bg-slate-900 rounded-[28px] p-5">
            <View className="w-12 h-12 rounded-2xl bg-white/10 items-center justify-center">
              <Receipt size={24} color="white" />
            </View>

            <Text className="text-white font-bold text-lg mt-5">Invoice</Text>

            <Text className="text-slate-300 mt-2 text-sm">Generate PDF</Text>
          </TouchableOpacity>
        </View>

        {/* ROW 2 */}

        <View className="flex-row justify-between mt-4">
          {/* PRODUCT */}

          <TouchableOpacity className="w-[48%] bg-white border border-slate-200 rounded-[28px] p-5">
            <View className="w-12 h-12 rounded-2xl bg-slate-100 items-center justify-center">
              <Package size={24} color="#0f172a" />
            </View>

            <Text className="text-slate-900 font-bold text-lg mt-5">
              Product
            </Text>

            <Text className="text-slate-500 mt-2 text-sm">Manage catalog</Text>
          </TouchableOpacity>

          {/* DELIVERY CHALLAN */}

          <TouchableOpacity className="w-[48%] bg-emerald-50 border border-emerald-100 rounded-[28px] p-5">
            <View className="w-12 h-12 rounded-2xl bg-emerald-100 items-center justify-center">
              <Package size={24} color="#059669" />
            </View>

            <Text className="text-slate-900 font-bold text-lg mt-5">Lead</Text>

            <Text className="text-slate-500 mt-2 text-sm">Manage leads</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* HEADER */}

      <View className="px-6 pt-16">
        <Text className="text-slate-500 text-base">Welcome back</Text>

        <Text className="text-4xl font-black text-slate-900 mt-2">
          Tarikul 👋
        </Text>

        <Text className="text-slate-500 mt-3 text-base leading-7">
          Manage quotations, invoices and products from one place.
        </Text>
      </View>

      {/* OVERVIEW */}
    </ScrollView>
  );
}
