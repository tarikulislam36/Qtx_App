import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import {
  ArrowRight,
  BarChart3,
  Clock3,
  FileText,
  Package,
  Receipt,
} from "lucide-react-native";

export default function DashboardScreen() {
  return (
    <ScrollView
      className="flex-1 bg-[#FAFAFA]"
      showsVerticalScrollIndicator={false}
    >
      {/* QUICK ACTIONS */}

      <View className="px-6 mt-10">
        <Text className="text-xl font-bold text-slate-900">Quick Actions</Text>

        <View className="mt-5 gap-4">
          <TouchableOpacity
            // onPress={() =>
            //   router.push("/quotations/create")
            // }
            className="bg-blue-600 rounded-3xl p-5 flex-row items-center justify-between"
          >
            <View className="flex-row items-center">
              <View className="bg-white/20 p-3 rounded-2xl">
                <FileText size={24} color="white" />
              </View>

              <View className="ml-4">
                <Text className="text-white font-bold text-lg">
                  Create Quotation
                </Text>

                <Text className="text-blue-100 mt-1">
                  Send professional quotations
                </Text>
              </View>
            </View>

            <ArrowRight size={20} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            // onPress={() => router.push("/invoices/create")}
            className="bg-slate-900 rounded-3xl p-5 flex-row items-center justify-between"
          >
            <View className="flex-row items-center">
              <View className="bg-white/10 p-3 rounded-2xl">
                <Receipt size={24} color="white" />
              </View>

              <View className="ml-4">
                <Text className="text-white font-bold text-lg">
                  Create Invoice
                </Text>

                <Text className="text-slate-300 mt-1">
                  Generate invoices instantly
                </Text>
              </View>
            </View>

            <ArrowRight size={20} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            // onPress={() => router.push("/products/create")}
            className="bg-white border border-slate-200 rounded-3xl p-5 flex-row items-center justify-between"
          >
            <View className="flex-row items-center">
              <View className="bg-slate-100 p-3 rounded-2xl">
                <Package size={24} color="#0f172a" />
              </View>

              <View className="ml-4">
                <Text className="text-slate-900 font-bold text-lg">
                  Add Product
                </Text>

                <Text className="text-slate-500 mt-1">Manage your catalog</Text>
              </View>
            </View>

            <ArrowRight size={20} color="#0f172a" />
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

      <View className="px-6 mt-10">
        <Text className="text-slate-900 text-xl font-bold">
          Business Overview
        </Text>

        <View className="flex-row justify-between mt-5">
          <View className="bg-white rounded-3xl p-5 w-[48%] border border-slate-100">
            <Text className="text-slate-500">Revenue</Text>

            <Text className="text-3xl font-black text-slate-900 mt-3">
              ₹4.8L
            </Text>
          </View>

          <View className="bg-white rounded-3xl p-5 w-[48%] border border-slate-100">
            <Text className="text-slate-500">Invoices</Text>

            <Text className="text-3xl font-black text-slate-900 mt-3">128</Text>
          </View>
        </View>

        <View className="flex-row justify-between mt-4">
          <View className="bg-white rounded-3xl p-5 w-[48%] border border-slate-100">
            <Text className="text-slate-500">Quotations</Text>

            <Text className="text-3xl font-black text-slate-900 mt-3">42</Text>
          </View>

          <View className="bg-white rounded-3xl p-5 w-[48%] border border-slate-100">
            <Text className="text-slate-500">Products</Text>

            <Text className="text-3xl font-black text-slate-900 mt-3">215</Text>
          </View>
        </View>
      </View>

      {/* RECENT ACTIVITY */}

      <View className="px-6 mt-10">
        <Text className="text-xl font-bold text-slate-900">
          Recent Activity
        </Text>

        <View className="bg-white rounded-3xl p-5 border border-slate-100 mt-5">
          <View className="flex-row items-center">
            <Clock3 size={18} color="#64748b" />

            <Text className="ml-3 text-slate-700">
              Quotation #QT-1023 created
            </Text>
          </View>

          <View className="flex-row items-center mt-5">
            <Clock3 size={18} color="#64748b" />

            <Text className="ml-3 text-slate-700">
              Invoice #INV-230 approved
            </Text>
          </View>

          <View className="flex-row items-center mt-5">
            <Clock3 size={18} color="#64748b" />

            <Text className="ml-3 text-slate-700">Product "Laptop" added</Text>
          </View>
        </View>
      </View>

      {/* INSIGHTS */}

      <View className="px-6 mt-10 mb-10">
        <Text className="text-xl font-bold text-slate-900">Insights</Text>

        <View className="bg-white rounded-3xl p-6 border border-slate-100 mt-5">
          <View className="flex-row items-center">
            <BarChart3 size={24} color="#2563EB" />

            <Text className="ml-3 text-lg font-bold text-slate-900">
              Business Performance
            </Text>
          </View>

          <Text className="text-slate-500 leading-7 mt-4">
            Your quotation approval rate increased by 12% compared to last
            month.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
